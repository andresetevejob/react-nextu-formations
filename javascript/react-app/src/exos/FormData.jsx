function FormData(){
    const handleSubmit= e=>{
        // Prevent default behavior
        e.preventDefault();
        console.log(e.target);
        const data = new FormData(e.target);
        // Access FormData fields with `data.get(fieldName)`
        // For example, converting to upper case
        console.log(data.get('username'));
    
        // Do your Axios stuff here
    }
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />
          <button>Send data!</button>
        </form>
      );
}
export default FormData;