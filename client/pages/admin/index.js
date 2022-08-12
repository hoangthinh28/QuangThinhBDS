import Sidebar from "./Sidebar";
import Widget from "./Widget";
export default function Admin() {
  return (
    <div className="bg-gray-800 w-full h-full">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="float-right w-4/5">
        <div className="flex justify-center flex-col pr-6">
          <div className="flex justify-center gap-5">
            <Widget type="balance" />
            <Widget type="user" />
            <Widget type="real" />
            <Widget type="earning" />
          </div>
        </div>
      </div>
    </div>
  );
}
