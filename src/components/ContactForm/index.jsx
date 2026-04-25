import { useState } from "react";
import {
  Section,
  LeftPanel,
  Tag,
  Headline,
  Subtitle,
  DecorSquare,
  RightPanel,
  FormTitle,
  FormField,
  Label,
  Input,
  CaptchaBox,
  CaptchaCheckbox,
  CaptchaLabel,
  CaptchaBadge,
  SubmitButton,
  Disclaimer,
} from "./styles";

function ContactForm() {
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    empresa: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Section id="fale-conosco">
      {/* Left side */}
      <LeftPanel>
        <Tag>FALE CONOSCO</Tag>
        <Headline>
          Transformamos como você enxerga sua empresa através dos dados
        </Headline>
        <Subtitle>
          Deixe seu contato para que nossos especialistas te procurem
        </Subtitle>
        <DecorSquare size="18px" bottom="120px" left="0" />
        <DecorSquare size="12px" bottom="60px" left="28px" />
      </LeftPanel>

      {/* Right side – form panel */}
      <RightPanel>
        <FormTitle>Entre em contato</FormTitle>

        <FormField>
          <Label htmlFor="nome">Nome*</Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite seu nome"
            value={form.nome}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="telefone">Telefone*</Label>
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            placeholder="(00) 90000-0000"
            value={form.telefone}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="email">E-mail Corporativo*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail corporativo"
            value={form.email}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="empresa">Empresa*</Label>
          <Input
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Empresa"
            value={form.empresa}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label>Verifique sua identidade*</Label>
          <CaptchaBox>
            <CaptchaCheckbox
              type="checkbox"
              id="captcha"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <CaptchaLabel htmlFor="captcha">Não sou um robô</CaptchaLabel>
            <CaptchaBadge>
              <svg viewBox="0 0 64 64" width="32" height="32" aria-hidden="true">
                <path
                  fill="#4A90D9"
                  d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4z"
                />
                <path
                  fill="#fff"
                  d="M44 22L28 38l-8-8-2.83 2.83L28 43.66 46.83 24.83z"
                />
              </svg>
              <span>reCAPTCHA</span>
              <small>Privacidade - Termos</small>
            </CaptchaBadge>
          </CaptchaBox>
        </FormField>

        <SubmitButton type="submit">FALAR COM ESPECIALISTA</SubmitButton>

        <Disclaimer>
          Eu concordo que a todus pode armazenar meus dados de contato para
          fins de reunião agendada e seu acompanhamento. Também concordo que meus
          dados podem ser utilizados para publicidade direta e iniciação de
          contato em conexão com os produtos e serviços oferecidos pela
          todus. Posso revogar este consentimento a qualquer momento através
          do e-mail contato@todus.com.br
        </Disclaimer>
      </RightPanel>
    </Section>
  );
}

export default ContactForm;
