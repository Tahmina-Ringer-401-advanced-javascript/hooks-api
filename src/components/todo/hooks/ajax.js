import { useEffect, useState} from 'react'
import axios from 'axios';

const useAjaxCalls = () => {

  const [data, setData] = useState([]);
  const [options, request] = useState({});

  useEffect(() => {
    async function ajax() {

      try {
        const res = await axios(options);
        console.log('res !!!!!!!!!!!!!', res);
        setData(res.data.results);
        console.log('data data data', data)
     } catch (error) {
      }
    }
    ajax();
  }, [data, options]);
  return { data, request };
}
export default useAjaxCalls;
