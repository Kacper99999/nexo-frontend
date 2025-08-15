import { AppBar } from '../components/AppBar/index.jsx'
import { PostCreator } from '../components/PostCreator/index.jsx';

export default function HomePage() {
  return (
    <div>
      <AppBar/>
      <PostCreator></PostCreator>
    </div>
  );
}
