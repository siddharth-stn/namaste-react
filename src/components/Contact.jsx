export default Contact = () => {
  return (
    <div className="p-4 mt-4 border border-black w-[250px] mx-auto">
      <form className="flex flex-col">
        <h1 className="w-auto mx-auto font-bold text-3xl mb-4">Contact Us</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border border-black px-2 mt-2"
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          className="border border-black px-2 mt-2"
        />
        <button
          type="submit"
          className="mt-4 bg-black text-white rounded py-1 w-4/12 mx-auto cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
