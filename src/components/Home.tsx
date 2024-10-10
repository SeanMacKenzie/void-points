import { useEffect, useState } from 'react';
import { Recognition } from '../types/Recognition';
import Void from './../images/VoidMonster.png';
import RecognitionView from './Recognition/RecognitionView';

function Home() {
  const [recognitions, setRecognitions] = useState<Recognition[]>([]);

  useEffect(() => {
    let recognitionList = [
      {
        id: 1,
        amount: 25,
        recipient: 'Doug',
        issuer: 'Sean',
        message: 'You did a great job.'
      },
      {
        id: 2,
        amount: 50,
        recipient: 'Megan',
        issuer: 'Sean',
        message: 'You did a great job.'
      },
      {
        id: 3,
        amount: 5,
        recipient: 'Sawyer',
        issuer: 'Sean',
        message: 'Get it together.'
      }

    ];
    setRecognitions(recognitionList);
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