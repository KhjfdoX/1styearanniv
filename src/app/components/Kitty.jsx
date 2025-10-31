import { Button } from 'flowbite-react';
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Meowwwwww
            </h2>
            <p className='text-gray-500 my-2'>
                Here is a  flower for the most BEAUTIFUL girl on the planet!
            </p>
            <Button className='rounded-tl-xl rounded-bl-br mt-4 ml-2'>
                <a href="https://youtu.be/hf1DkBQRQj4?si=Yu_51Fm5eGUKN2X_" target='_blank' rel='noopener noreferrer'>
                    Click Here
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1 ml-8">
            <img src="cat.webp" />
        </div>
    </div>
  )
}