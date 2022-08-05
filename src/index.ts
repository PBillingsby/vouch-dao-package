import Arweave from 'arweave';
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

const query = (address: string) => {
  const vouchQuery = {
    query: `
    query {
      transactions(
        tags:{name:"Vouch-For", values:[${address}]}
      ) {
        edges {
          node {
            id
            tags {
              name 
              value 
            }
          }
        }
      }
    }   
`}
  return vouchQuery;
}

export const isVouched = async (address: string) => {
  const vouchQuery = query(address);
  try {
    const results = await arweave.api.post(`graphql`, vouchQuery)
      .catch((err: any) => {
        console.error('GraphQL query failed');
        throw new Error(err);
      });
    return results.data.errors.length > 0 ? false : true;
  }
  catch (error) {
    console.log(error);
    return error
  }
}

