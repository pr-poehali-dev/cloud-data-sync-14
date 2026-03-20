export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/10c911b8-a84d-4fee-9bdd-9e800c3ea29e/files/9a1ec5f2-9272-430a-944d-748552891c7a.jpg"
          alt="Дизайнерская печь и мангал"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Ручная работа, живущая веками</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждое изделие — это симбиоз огня и металла. Мангальные зоны, костровые чаши, печи и столы,
          созданные вручную для тех, кто не идёт на компромисс в стиле.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}