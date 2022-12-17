import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y',
      // Authorization: 'Client-ID cTY4NT7fPCrMf8U_KRp7b4svJHDTZhCl9BrmSpQUe4M',
      // Authorization: 'Client-ID i23X3zeO0844k9_d5wLUy_I_hqe2BbHnRK25IJC1Ies',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
