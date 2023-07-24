export default function Button({ enviar, deletar, editar }) {
  return (
    <>
    <button className="bg-green-200 w-30 h-30" >{enviar}</button>
    <button className="bg-red-200 w-30 h-30">{deletar}</button>
    <button className="bg-orange-200 w-30 h-30">{editar}</button>
</>
  );
}
