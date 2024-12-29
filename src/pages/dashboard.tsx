import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import {useState} from "react";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  const [modalopen,setModalOpen]=useState(false);





  
  return<div>

    <Sidebar/>

    
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2 ">
      <CreateContentModal open={modalopen} onClose={()=>{
        setModalOpen(false);
      }}/>

      <div className="flex justify-end gap-4">
        <Button onClick={()=>{
          setModalOpen(true)
          }} variant="primary" text="Add content" startIcon={<PlusIcon />} />
        <Button
          variant="secondary"
          text="Share Brain"
          startIcon={<ShareIcon />}
        />
      </div>

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
    </div>

    
  
}

export default Dashboard;
