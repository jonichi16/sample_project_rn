import {useEffect, useState} from 'react';

const useLorem = () => {
  const [lorem, setLorem] = useState<string>('');

  useEffect(() => {
    const fetchLorem = async () => {
      const response = await fetch('https://loripsum.net/api/1/medium', {
        mode: 'cors',
      });
      const data = await response.text();

      const regex = /<\/?p>/g;
      setLorem(data.replace(regex, ''));
    };

    try {
      fetchLorem();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {lorem};
};

export default useLorem;
