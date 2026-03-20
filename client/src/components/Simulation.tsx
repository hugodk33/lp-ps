import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calculator } from 'lucide-react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

interface QuoteData {
  type: 'auto' | 'home' | 'life' | 'business';
  value: number;
  coverage: 'basic' | 'standard' | 'premium';
}

const COVERAGE_MULTIPLIERS = {
  basic: 0.5,
  standard: 1,
  premium: 1.5,
};

const BASE_PRICES = {
  auto: 150,
  home: 200,
  life: 100,
  business: 300,
};

export default function Simulation() {
  const [quote, setQuote] = useState<QuoteData>({
    type: 'auto',
    value: 50000,
    coverage: 'standard',
  });

  const [isSent, setIsSent] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    cpf: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    whatsapp: false,
    cpf: false,
    message: false,
  });

  const getError = (field: string) => {
    if (!touched[field as keyof typeof touched]) return '';
  
    switch (field) {
      case 'fullName':
        return form.fullName.length < 3 ? 'Nome muito curto' : '';
  
      case 'email':
        return !isValidEmail(form.email) ? 'Email inválido' : '';
  
      case 'whatsapp':
        return !isValidPhone(form.whatsapp) ? 'WhatsApp inválido (DDD + número)' : '';
  
      case 'cpf':
        return !isValidCPF(form.cpf) ? 'CPF inválido' : '';
  
      case 'message':
        return form.message.length < 5 ? 'Mensagem muito curta' : '';
  
      default:
        return '';
    }
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .slice(0, 14);
  };

  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 11;
  };
  
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidCPF = (cpf: string) => {
    const cleaned = cpf.replace(/\D/g, '');
  
    if (cleaned.length !== 11 || /^(\d)\1+$/.test(cleaned)) return false;
  
    let sum = 0;
    let rest;
  
    for (let i = 1; i <= 9; i++)
      sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i);
  
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cleaned.substring(9, 10))) return false;
  
    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i);
  
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
  
    return rest === parseInt(cleaned.substring(10, 11));
  };

  const isFormValid =
  form.fullName.length > 3 &&
  isValidEmail(form.email) &&
  isValidPhone(form.whatsapp) &&
  isValidCPF(form.cpf) &&
  form.message.length > 5 &&
  !!captchaValue;

  const calculateMonthly = () => {
    const basePrice = BASE_PRICES[quote.type];
    const multiplier = COVERAGE_MULTIPLIERS[quote.coverage];
    const valueMultiplier = quote.value / 100000;
    return Math.round(basePrice * multiplier * valueMultiplier * 100) / 100;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!isFormValid) return;
  
    const finalMessage = `
  Nova solicitação de contato 📩
  
  👤 Nome: ${form.fullName}
  📧 Email: ${form.email}
  📱 WhatsApp: ${form.whatsapp}
  🪪 CPF: ${form.cpf}
  
  💬 Mensagem:
  ${form.message}
    `;
  
    emailjs.send(
      'service_0wz250l',
      'template_bbu3a8x',
      {
        name: form.fullName,
        time: new Date().toLocaleString('pt-BR'),
        message: finalMessage,
      },
      'UBZh004gEbzDGltI-'
    )
    .then(() => {
      setIsSent(true);
      setForm({
        fullName: '',
        email: '',
        whatsapp: '',
        cpf: '',
        message: '',
      });
    })
    .catch(console.error);
  };

  const monthlyPrice = calculateMonthly();

  return (
    <section id="simulacao" className="w-full py-20 md:py-32 bg-gray-200">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Receber Simulação</span>
          </div>
          <h2 className="text-primary font-bold">Receba o calculo de seu seguro</h2>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Nos contacte para receber sua simulação
          </p>
        </div>
        <div style={{maxWidth: 360 , margin: '0 auto'}}>
          {/* <h3 className="font-bold text-lg">Email</h3> */}

          {!isSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="fullName"
              type="text"
              placeholder="Nome completo"
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              onBlur={() => setTouched({ ...touched, fullName: true })}
              className={`w-full p-2 rounded border bg-white ${
                getError('fullName') ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            
            {getError('fullName') && (
              <span className="text-red-500 text-sm">{getError('fullName')}</span>
            )}

            <input
              name="email"
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onBlur={() => setTouched({ ...touched, email: true })}
              className={`w-full p-2 rounded border bg-white ${
                getError('email') ? 'border-red-500' : 'border-gray-300'
              }`}
            />

            {getError('email') && (
              <span className="text-red-500 text-sm">{getError('email')}</span>
            )}
          
            <input
              name="whatsapp"
              type="text"
              placeholder="WhatsApp"
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              onBlur={() => setTouched({ ...touched, whatsapp: true })}
              className={`w-full p-2 rounded border bg-white ${
                getError('whatsapp') ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />

            {getError('whatsapp') && (
              <span className="text-red-500 text-sm">{getError('whatsapp')}</span>
            )}
          
            <input
              name="cpf"
              type="text"
              placeholder="CPF"
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
              onBlur={() => setTouched({ ...touched, cpf: true })}
              className={`w-full p-2 rounded border bg-white ${
                getError('cpf') ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />

            {getError('cpf') && (
              <span className="text-red-500 text-sm">{getError('cpf')}</span>
            )}
          
            <textarea
              name="message"
              placeholder="Mensagem"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onBlur={() => setTouched({ ...touched, message: true })}
              className={`w-full p-2 rounded border bg-white ${
                getError('message') ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />

            {getError('message') && (
              <span className=
              "text-red-500 text-sm">{getError('message')}</span>
            )}

            <ReCAPTCHA
              sitekey="6LfSFpEsAAAAAB5dwKw79cpzvjbbQub33TvaRyul"
              onChange={(value:any) => setCaptchaValue(value)}
            />
            <button
              type="submit"
              disabled={!isFormValid}
              className={`py-2 px-4 w-full rounded text-white ${
                isFormValid ? 'bg-primary' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Enviar Mensagem
            </button>
          </form>
          ) : (
            <div className="p-6 bg-green-100 rounded-lg text-center">
              <h4 className="text-lg font-bold text-green-700 mb-2">
                ✅ Obrigado pela mensagem!
              </h4>
              <p className="text-sm text-green-800">
                Sua mensagem foi enviada para <br />
                <strong>panamerica@panamericanordesteseguros.com.br</strong>
              </p>
            </div>
          )}
        </div>
        {/* <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg border-0">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="block font-semibold text-neutral-dark text-lg">Tipo de Seguro</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {(['auto', 'home', 'life', 'business'] as const).map((type) => {
                    const isSelected = quote.type === type;
                    const bgClass = isSelected
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-muted text-neutral-dark hover:bg-muted/80';
                    const label = type === 'auto' ? '🚗 Auto'
                      : type === 'home' ? '🏠 Casa'
                        : type === 'life' ? '❤️ Vida'
                          : '💼 Empresa';
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setQuote({ ...quote, type })}
                        className={`p-4 rounded-lg font-semibold transition-all duration-300 ${bgClass}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-neutral-dark text-lg">
                  Valor a Proteger: R$ {quote.value.toLocaleString('pt-BR')}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={quote.value}
                  onChange={(e) => setQuote({ ...quote, value: Number(e.target.value) })}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-neutral-dark/60">
                  <span>R$ 10.000</span>
                  <span>R$ 500.000</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-neutral-dark text-lg">Cobertura</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['basic', 'standard', 'premium'] as const).map((level) => {
                    const isSelected = quote.coverage === level;
                    const bgClass = isSelected
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-muted text-neutral-dark hover:bg-muted/80';
                    const label = level === 'basic' ? 'Básica'
                      : level === 'standard' ? 'Padrão'
                        : 'Premium';
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setQuote({ ...quote, coverage: level })}
                        className={`p-4 rounded-lg font-semibold transition-all duration-300 ${bgClass}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-2 border-primary/20">
                <p className="text-neutral-dark/70 text-sm font-medium mb-2">Valor Mensal Estimado</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">R$ {monthlyPrice.toFixed(2)}</span>
                  <span className="text-neutral-dark/60">/mês</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-neutral-dark text-lg">Seu Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {submitted ? '✓ Simulação Enviada!' : 'Receber Proposta'}
              </Button>
            </form>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
