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
        tags:{name:"Vouch-For", values:["${address}"]}
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
    return await results.data.data.transactions.edges.length > 0 ? true : false;
  }
  catch (error) {
    console.log(error);
    return error
  }
}

export const isVouchedBy = async (address: string, service: string) => {
  const vouchQuery = query(address);
  try {
    const results = await arweave.api.post(`graphql`, vouchQuery)
      .catch((err: any) => {
        console.error('GraphQL query failed');
        throw new Error(err);
      })

    const edges: Array<object> = results.data.data.transactions.edges;
    if (!service || !service.length) {
      return new Error("Must provide a valid service");
    }

    let conditionMet: boolean = false;
    edges && edges.map((edge: any) => {
      const verificationTag = edge.node.tags.find((element: any) => element?.name === "Verification-Method")
      if (verificationTag.value.toLowerCase() === service.toLowerCase()) {
        conditionMet = true;
      }
    })

    return conditionMet;
  }
  catch (error) {
    console.log(error);
    return error
  }
}

