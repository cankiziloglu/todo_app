import Button from "./ui/button";

const AddItemForm = () => {
  return <form>
    <h2>Add an Item</h2>
    <input type='text' placeholder='Item name' />
    <Button>Add to List</Button>
  </form>;
};

export default AddItemForm;
