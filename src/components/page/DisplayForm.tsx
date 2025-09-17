function DisplayForm() {
  return (
    <div
      className="mx-auto bg-white shadow p-8"
      style={{ width: "210mm", height: "297mm" }}
    >
      <h1 className="text-xl font-bold">My A4 Document</h1>
      <p>This simulates a real A4 page.</p>
      <ul className="text-red-800">
        <li>Fix Save Functionality</li>
        <li>Decide how to store CV details</li>
        <li>Implement details to Harvard Template</li>
        <li>Implement download PDF button</li>
      </ul>
    </div>
  );
}

export default DisplayForm;
