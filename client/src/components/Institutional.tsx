import { Heart, Target, Compass } from 'lucide-react';
import escudo from '../../../assets/escudo-ps.png';
import bginstitucional from '../../../assets/blurred-corporate-office-background.jpg';

export default function Institutional() {
  const values = [
    {
      icon: Target,
      emoji: '🎯',
      title: 'Missão',
      description: 'Oferecer soluções de seguros acessíveis e confiáveis que protejam o que é mais importante para nossos clientes.',
      color: 'text-secondary',
    },
    {
      icon: Heart,
      emoji: '🔭',
      title: 'Visão',
      description: 'Ser a corretora mais confiável e inovadora do Ceará, reconhecida pela excelência em atendimento e proteção.',
      color: 'text-accent',
    },
    {
      icon: Compass,
      emoji: '🧭',
      title: 'Valores',
      description: 'Integridade, transparência, inovação e compromisso com o bem-estar de nossos clientes e colaboradores.',
      color: 'text-primary',
    },
  ];

  return (
    <section id="institucional" className="w-full pb-20 md:p-0 bg-white" >
      <div className="w-full bg-blue-500 text-center py-10" style={{backgroundImage: 'url("' + bginstitucional + '")' , backgroundSize: '100% auto'}}>
        <img src={escudo} alt="Escudo de Proteção" style={{maxWidth: 130}} className="w-full mx-auto mb-4" />
        <h2 className="text-white font-bold">Quem Somos</h2>
        <br />
        <p className="indent-8 text-lg text-white mb-4 text-justify rounded-md p-3 m-2" style={{backgroundColor: '#020237'}}>
          A <b>Panamérica Seguros</b> é uma empresa com uma história de sucesso que começou em <b>1988</b>, graças à visão e determinação do seu fundador, <b>Emanoel Ribamar Alencar Lima</b>. 
          Nascido em uma família grande, Emanoel iniciou sua carreira como gerente de banco e, aos <b>38 anos</b>, decidiu criar seu próprio negócio de seguros. 
        </p>
        <p className="indent-8 text-lg text-white text-justify rounded-md p-3 m-2" style={{backgroundColor: '#020237'}}>
          Hoje, a <b>Panamérica</b> é uma referência no mercado, com uma carteira de clientes relevantes, nas áreas <b>industrial</b>, <b>comercial</b> e <b>empresas de ônibus</b>, além de forte atuação no <b>segmento individual</b>. 
          Com uma trajetória marcada pela dedicação e espírito empreendedor, a Panamérica continua a crescer. <br />
          Mais do que vender seguros, oferecemos um <b>atendimento humanizado</b> e uma <b>consultoria especializada</b>, garantindo que você tenha <b>a cobertura certa para cada momento da sua vida</b>.
          Sempre com visão inovadora, a <b>Panamérica</b> está na palma da sua mão oferecendo um site completo, onde você pode fazer a simulação do seu seguro e usufruir de todos os nossos serviços. <b>Panamérica seguros</b>, proteção sem fronteiras.
        </p>
      </div>
      <div className="container mx-auto pt-5 px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto" style={{maxWidth: 1000}}>
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-white to-neutral-light border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <h1 className="text-center" >{item.emoji}</h1>
                <br />
                <h3 className="text-center text-xl font-bold text-neutral-dark mb-3">{item.title}</h3>
                <hr className='w-full border-2 my-2'/>
                <p className="text-neutral-dark/70 leading-relaxed text-justify text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-16 border-t border-border bg-gradient-to-r from-indigo-700 to-blue-500 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mx-auto" style={{maxWidth: 800}}>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-300">50K+</div>
            <hr className="w-2/4 mx-auto border-1"/>
            <p className="text-white font-semibold">Clientes Satisfeitos</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-orange-300">40</div>
            <hr className="w-2/4 mx-auto border-1"/>
            <p className="text-white font-semibold">Anos de Experiência</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-300">100%</div>
            <hr className="w-2/4 mx-auto border-1"/>
            <p className="text-white font-semibold">Transparência</p>
          </div>
        </div>
      </div>
    </section>
  );
}
