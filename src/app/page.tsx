"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {

  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [crashout, setCrashout] = useState(false)

  const handleNumber = (num: string) => {

    if (isNewNumber) {

      setDisplay(num);
      setIsNewNumber(false);
    }

    else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setIsNewNumber(true);
  };

  const handleEquals = () => {

    try {

      const result = eval(equation + display);

      if (result === 63) {
        setDisplay("64 cuz we not from 63rd")
        setCrashout(true)
      }
      else {
        setCrashout(false)
        setDisplay(String(result));
      }

      setEquation('');
      setIsNewNumber(true);
    }

    catch (error) {

      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
      console.log(error)
    }
  };

  const handleClear = () => {

    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  const calmVon = () => {
    setCrashout(false)
    console.log("sorry von")
  }

  const GithubIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="white"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );


  const buttonStyle = "w-16 h-16 m-1 text-lg font-semibold";

  return (
    <>
      {crashout ?
        <div className='absolute flex justify-center w-full h-screen bg-black '>
          <h1 className='absolute font-extrabold text-red-600 text-3xl py-32 z-10'>Incoming crashout...</h1>
          <video src='https://cdn-cf-east.streamable.com/video/mp4/0ps9h5.mp4?Expires=1735253369924&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=QWb0jMUAUZUMDX6sZVuD9jJarRswVuH2dP9xCPm8ebVfQfuRIbIveGsoaP2C9Wnl5-8scI~TSDEPafwO0VBiXuwyDE-fhlLq2TJb3GZLZti4i-Az3vsa8jr9T19WZ3-ErgFaOtmqEI6jhU8UR6p27Z1WcbCBnm7uk3fzfUSKCYRmmU65c~3h93M6u~Q4bTsq5FfXLgT-taCcoy~j04lZ24oPID3EEljUVPiBPfd5vu-Sbf-yvdRPU1~~G3JMkccOCh0wdU8td1b8yxSWYoFsZDy8Q7S1PtjKoBo3c8oy4DXErFTo8pI2cOXyCnkOXy94WEYo51OXVxeMI8L9Ytuxbw__'
            autoPlay={true}
            loop={true}
            className='absolute h-screen animate-fade-in'
          ></video>
          <div className='z-20'>
            <Button
              className="absolute top-4 right-[140px] w-fit h-16 m-1 text-sm font-semibold"
              onClick={calmVon}
            >
              Sorry King Von :(
            </Button>
          </div>
        </div>
        : ""}
      <div className='static flex flex-col justify-center h-screen items-center'>
        <Card className="w-fit text-center p-4 bg-black border-none">

          <CardContent>
            <div className="mb-4">
              <div className="text-gray-500 h-6 text-right">{equation}</div>
              <div className="text-2xl font-bold text-right bg-black text-white p-2 rounded">{display}</div>
            </div>

            <div className="grid grid-cols-4 gap-1">
              <Button
                className={buttonStyle}
                onClick={handleClear}
              >
                C
              </Button>
              <Button
                className={buttonStyle}
                onClick={() => setDisplay(String(-1 * parseFloat(display)))}
              >
                +/-
              </Button>
              <Button
                className={buttonStyle}
                onClick={() => handleOperator('%')}
              >
                %
              </Button>
              <Button
                className={buttonStyle}
                onClick={() => handleOperator('/')}
              >
                ÷
              </Button>

              {[7, 8, 9].map((num) => (
                <Button
                  key={num}
                  className={buttonStyle}
                  onClick={() => handleNumber(String(num))}
                >
                  {num}
                </Button>
              ))}
              <Button
                className={buttonStyle}
                onClick={() => handleOperator('*')}
              >
                ×
              </Button>

              {[4, 5, 6].map((num) => (
                <Button
                  key={num}
                  className={buttonStyle}
                  onClick={() => handleNumber(String(num))}
                >
                  {num}
                </Button>
              ))}
              <Button
                className={buttonStyle}
                onClick={() => handleOperator('-')}
              >
                -
              </Button>

              {[1, 2, 3].map((num) => (
                <Button
                  key={num}
                  className={buttonStyle}
                  onClick={() => handleNumber(String(num))}
                >
                  {num}
                </Button>
              ))}
              <Button
                className={buttonStyle}
                onClick={() => handleOperator('+')}
              >
                +
              </Button>

              <Button
                className="col-span-2 h-16 m-1 text-lg font-semibold"
                onClick={() => handleNumber('0')}
              >
                0
              </Button>
              <Button
                className={buttonStyle}
                onClick={() => handleNumber('.')}
              >
                .
              </Button>
              <Button
                className={buttonStyle}
                onClick={handleEquals}
              >
                =
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className='flex gap-4'>
          <Button
            className="gap-2 p-4 w-25 h-25 rounded-full"
            title='Le source code'
            onClick={() => window.open('https://github.com/baggiest/vonculator', '_blank')}
          >
            <GithubIcon />
          </Button>
          <Button
            className="gap-2 p-4 w-25 h-25 rounded-full"
            title='Who tf made this shit😭'
            onClick={() => window.open('https://mani.pw', '_blank')}
          >
            🔗
          </Button>
        </div>

      </div >
    </>
  );

}
