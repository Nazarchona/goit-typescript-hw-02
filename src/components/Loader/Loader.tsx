import { Oval } from 'react-loader-spinner';


export default function Loader() {
  return (
    
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      <Oval color="#0051ff" height={40} width={40} />
    </div>
  );
}