import { useEffect, useState } from 'react';
import { Recognition } from '../types/Recognition';
import Void from './../images/VoidMonster.png';
import RecognitionView from './Recognition/RecognitionView';

function Home() {
  const [recognitions, setRecognitions] = useState<Recognition[]>([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'GET',
      headers: headers,
    }

    fetch(`/recognitions`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log('got that data', data);
        setRecognitions(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <div className="text-center">
        <h2>Not sure what this will show. Probably all the <i>recognitions?</i></h2>
        <hr />
        {/* <img src={Void} alt="void monster"></img> */}
        <div>
          {recognitions.map(recognition => (
            <RecognitionView key={recognition.id} recognition={recognition} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home