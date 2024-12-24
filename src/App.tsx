import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Card } from "./components/Card";
function App() {
  return (
    <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon />} />
      <Button
        variant="secondary"
        text="Share Brain"
        startIcon={<ShareIcon />}
      />


      <div className="flex gap-4">

      <Card
        type="twitter"
        link="https://x.com/PrajjwalChoubey/status/1867693626421391777"
        title="First Tweet"
      />
      <Card
        type="youtube"
        link="https://youtu.be/Oo3qsxihXqY?si=DD2na7mgE62fZ5wH"
        title="First Youtube"
      />
      </div>
    </div>
  );
}

export default App;
