export async function get(req) {
  const { proxy } = req.params; 
  const hypgraphUrl = `https://api-eu-central1.hygraph.com/v2/${proxy}`;  URL
  
  const response = await fetch(hypgraphUrl);
  const data = await response.json();
  
  // Return the response data or handle it as needed
  return {
    json: data,
  };
}