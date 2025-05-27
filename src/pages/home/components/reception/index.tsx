const HomeReception = () => {
  return (
    <section className="mt-5">
        <div className="container">
        <div className="bg-[#34B269] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        {/* Chap taraf */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Qabulga <br /> ro‘yxatdan o‘ting
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Ma'lumotlaringizni yozib qoldiring, siz bilan tezda aloqaga chiqib,
            maktabimiz haqida yanada batafsil aytib beramiz
          </p>
        </div>

        {/* O'ng taraf */}
        <form className="bg-white rounded-[32px] p-6 w-full md:w-1/2 space-y-4 text-gray-900">
          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full p-3 rounded-lg border focus:outline-none border-[#166534E6]"
          />
          <select className="w-full p-3 rounded-lg border focus:outline-none border-[#166534E6]">
            <option>Qaysi tumanda istiqomat qilasiz?</option>
            <option>Yunusobod</option>
            <option>Chilonzor</option>
            <option>Yakkasaroy</option>
            <option>Sergeli</option>
            <option>Mirobod</option>
            <option>Bektemir</option>
            <option>Mirzo Ulug'bek</option>
            <option>Olmazor</option>
            <option>Yashnobod</option>
            <option>Shayxontohur</option>
            <option>Uchtepa</option>
          </select>
          <select className="w-full p-3 rounded-lg border focus:outline-none border-[#166534E6]">
            <option>Farzandingiz qaysi sinfga o‘tadi?</option>
            <option>1-sinf</option>
            <option>2-sinf</option>
            <option>3-sinf</option>
            <option>4-sinf</option>
            <option>5-sinf</option>
            <option>6-sinf</option>
            <option>7-sinf</option>
            <option>8-sinf</option>
            <option>9-sinf</option>
            <option>10-sinf</option>
            <option>11-sinf</option>
            
          </select>
          <div className="w-full flex items-center">
            <span className="px-3 py-3 bg-gray-100 rounded-l-lg border border-[#166534E6] border-r-0">
              +998
            </span>
            <input
              type="tel"
              placeholder="99-999-9999"
              className="w-full p-3 rounded-ee-xl border focus:outline-none border-[#166534E6]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFB800] text-white font-semibold py-3 rounded-full hover:bg-[#e6a700] transition"
          >
            Ariza topshirish
          </button>
        </form>
      </div>
        </div>
     
    </section>
  );
};

export default HomeReception;
