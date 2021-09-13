function importAll(r) {
  return r.keys().map((fileName) => ({
    link: `/blog`.concat(fileName.substr(1).replace(/\/index\.mdx$/, ``)),
    meta: r(fileName).meta,
  }));
}

function sortInDescendingOrder(a, b) {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
}

function getMetadataForPosts() {
  return importAll(require.context(`../pages/blog`, true, /\.mdx$/)).sort(
    (a, b) => sortInDescendingOrder(a.meta.date, b.meta.date)
  );
}

export default getMetadataForPosts;
