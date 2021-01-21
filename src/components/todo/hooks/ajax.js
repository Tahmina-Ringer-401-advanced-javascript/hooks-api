import { useEffect, useState} from 'react'
import axios from 'axios';

const useAjaxCalls = () => {

  const [data, setData] = useState([]);
  const [options, request] = useState({});

  useEffect(() => {
    async function ajax() {

      try {
        const res = await axios(options);
        setData(res.data.results);
     } catch (error) {
      }
    }
    ajax();
  }, [options]);
  return { data, request };
}
export default useAjaxCalls;
