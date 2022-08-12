import Arweave from 'arweave';

declare const ContractError: any;

export const verifiedByVouch = async () => {
  const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
  })
  const res = await arweave.transactions.get("ZGaL5DOMIYRw9YHZ_NZ2JoIjST1QwhiD6T1jePH381I");
  const parse = JSON.parse(res.get('data', { decode: true, string: true }))
  console.log(parse.votes)

  try {
    const verifiedAddresses = {};
    // const contract = await smartweave.rea("ZGaL5DOMIYRw9YHZ_NZ2JoIjST1QwhiD6T1jePH381I")
    // const filtered = contract.votes.filter((vote: any) => vote.status === 'passed')

    // filtered.map((vote: object) => {
    //   verifiedAddresses[vote['value']] = true;
    // })

    return { result: verifiedAddresses };
  } catch (err) {
    throw new ContractError('Something went wrong');
  }
}
