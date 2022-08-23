import axios from 'axios';

const request = async (graphqlQuery) => {
    const endpoint = process?.browser ? window.location.protocol + "//" + window.location.hostname + '/graphql' : process.env.WORDPRESS_API_URL;
    const headers = {'Content-Type': 'application/json'}

    const response = await axios({
        url: endpoint,
        method: 'post',
        headers: headers,
        data: graphqlQuery
    }).catch((error) => {
        return error.message
    });

    return response.data;
}

export async function getIntro() {
    const query = `
             query getIntro {
              pages(where: {name: "home"}) {
                edges {
                  node {
                    intro {
                      title
                    }
                  }
                }
              }
            }
    `;

    const graphqlQuery = {
        "operationName": "getIntro",
        "query": query,
        "variables": {}
    };

    const introField = await request(graphqlQuery);

    let data = introField?.data;
    return data;
}

export async function getAllPages() {
    const query = `
        query getAllPages {
            pages(first: 1000) {
                nodes {
                    id
                    slug
                    link
                    title
                    content
                    seo {
                      metaDesc
                      metaKeywords
                      metaRobotsNofollow
                      metaRobotsNoindex
                      opengraphDescription
                      opengraphImage {
                        mediaItemUrl
                      }
                      opengraphTitle
                      title
                    }
                }
            }
        }
    `;

    const graphqlQuery = {
        "operationName": "getAllPages",
        "query": query,
        "variables": {}
    };

    const pages = await request(graphqlQuery);

    let data = pages?.data.pages?.nodes;

    return data;
}