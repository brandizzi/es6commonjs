
exports.importer = async () => {
  const pmap = await import('p-map');
  console.log('Yes, I could import p-map:', pmap);
}