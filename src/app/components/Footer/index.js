export default function Footer() {
  return (
    <div className="w-full absolute bg-black text-white w-30 h-30 text-center bottom-0">
      <p>
        IGREJA VEM | CNPJ: 04.745.591/0001-87
      </p>
      <div className="grid grid-cols-2">
        <div>
          <div>
            <h4 className="font-black">Endereço</h4>
            <a href="https://www.google.com/maps/place/CCVIDEIRA+Recife/@-8.1621073,-34.9150113,17z/data=!3m1!4b1!4m20!1m13!4m12!1m4!2m2!1d-34.8955188!2d-8.0831652!4e1!1m6!1m2!1s0x7aae19df53bcef7:0xb503854a0709d8d7!2sccvideira+recife+maps!2m2!1d-34.9124951!2d-8.1621385!3m5!1s0x7aae19df53bcef7:0xb503854a0709d8d7!8m2!3d-8.1621126!4d-34.9124364!16s%2Fg%2F11hz5vqk2h?entry=ttu" target="_blank" >Av. Beira Mar, 1058<br /> Piedade, Recife - PE <br /> CEP 51021-190</a>
          </div>
        </div>
        <div>
          <div className="font-black">
            Siga-nos
          </div>
          <a className="flex justify-center items-center" href="https://www.instagram.com/vem.igreja/" target="_blank" rel="noopener noreferrer ">
            <img
              src="./instagram-svgrepo-com"
              alt="instasvg"
              className="w-16 h-16"
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5581981965729" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
      <p>&copy;Copyright 2023 | Desenvolvido por @caiorochadev </p>
    </div>


  )
}
