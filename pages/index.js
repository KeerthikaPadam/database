import { supabase } from '../lib/supabaseClient';

const Home = () => {
  const fetchData = async () => {
    const { data, error } = await supabase
      .from('your-table')
      .select('*');
    if (error) console.error(error);
    else console.log(data);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default Home;