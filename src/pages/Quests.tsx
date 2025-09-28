import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const questsData = [
  {
    course: "CSE 110",
    assignment: "QUIZ 1",
    dueDate: "9/28/25",
    points: "10"
  },
  {
    course: "ASU 101",
    assignment: "PLAN YOUR FLOWCHART",
    dueDate: "9/28/25",
    points: "15"
  },
  {
    course: "MAT 265",
    assignment: "HOMEWORK 1.1",
    dueDate: "9/29/25",
    points: "20"
  },
  {
    course: "BIO 100",
    assignment: "LAB 2",
    dueDate: "9/29/25",
    points: "100"
  },
  {
    course: "ENG 101",
    assignment: "ESSAY PEER REVIEW",
    dueDate: "9/30/25",
    points: "30"
  },
  {
    course: "MAT 265",
    assignment: "HOMEWORK 1.2",
    dueDate: "10/3/25",
    points: "20"
  },
  {
    course: "CSE 110",
    assignment: "QUIZ 2",
    dueDate: "10/4/25",
    points: "10"
  }
];

const Quests = () => {
  return (
    <div className="min-h-screen bg-ascendia">
      <Sidebar />
      
      <div className="md:ml-64 p-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-8 w-8" />
            </Button>
          </Link>
          <h1 className="text-6xl font-bold text-foreground">Quests</h1>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          {/* Table Header */}
          <div className="bg-white rounded-2xl p-6 mb-4">
            <div className="grid grid-cols-4 gap-6 text-lg font-bold text-black uppercase tracking-wider">
              <span>COURSE</span>
              <span>ASSIGNMENT</span>
              <span>DUE DATE</span>
              <span>POINTS</span>
            </div>
          </div>

          {/* Quest Entries */}
          <div className="space-y-3">
            {questsData.map((quest, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="grid grid-cols-4 gap-6 items-center">
                  {/* Course */}
                  <div className="text-white font-bold text-xl">
                    {quest.course}
                  </div>

                  {/* Assignment */}
                  <div className="text-white text-lg">
                    {quest.assignment}
                  </div>

                  {/* Due Date */}
                  <div className="text-white text-lg">
                    {quest.dueDate}
                  </div>

                  {/* Points */}
                  <div className="text-white font-bold text-xl">
                    {quest.points}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;