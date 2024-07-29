import Axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const axios = Axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api',
});

export async function getReviews() {
  try {
    const res = await axios.get('/reviews');
    return res.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

export async function postContacts(data) {
  try {
    const res = await axios.post('/requests', data);

    return res.data;
  } catch (error) {
    iziToast.show({
      message: 'Something went wrong. Please, try again.',
      position: 'topCenter',
      backgroundColor: '#ed3b44',
      messageColor: '#fafafa',
      titleColor: '#fafafa',
    });
  }
}
