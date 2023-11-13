import {useEffect, useState} from 'react';

const useLorem = () => {
  const [lorem, setLorem] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const fetchLorem = async () => {
        const response = await fetch('https://loripsum.net/api/1/medium', {
          mode: 'cors',
        });
        const data = await response.text();

        const regex = /<\/?p>/g;
        setLorem(data.replace(regex, ''));
      };

      fetchLorem();
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  return {lorem, isLoading};
};

export default useLorem;
