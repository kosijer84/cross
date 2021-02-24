export const filterByDates = (documents, from, to) => {
  const startDate = new Date(from);
  const toDate = new Date(to);

  return documents.filter((document) => {
    const documentDate = new Date(document.date);

    return documentDate.getTime() >= startDate.getTime() && documentDate.getTime() <= toDate.getTime();
  });
};

export const filterByTypes = (documents, extensions) => {

  return documents.filter((document) => {

    return extensions.includes(document.name.match(/\.[a-z]*/)[0]);
  })
}

export const sortByDate = (documents, sorted) => {

  return sorted ?
    documents.sort((a, b) => new Date(a.date) - new Date(b.date)) :
    documents.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const sortByName = (documents, sorted) => {

  return sorted ?
    documents.sort((a, b) => a.name.localeCompare(b.name)) :
    documents.sort((a, b) => b.name.localeCompare(a.name))
}
