import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";
import { useState } from "react";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log("Dados enviados:", data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h2 className={styles.title}>Ficou interessado?</h2>
        <p className={styles.subtitle}>
          Deixe seu contato para que a nossa equipe entre em contato com você!
        </p>
      </div>

      {submitted ? (
        <div className={styles.successMessage}>
          <h3>Obrigado pelo contato!</h3>
          <p>Em breve nossa equipe entrará em contato com você.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome completo"
                {...register("name", { required: "Nome é obrigatório" })}
                className={errors.name ? styles.inputError : ""}
              />
              {errors.name && (
                <span className={styles.errorMessage}>
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(00) 00000-0000"
                {...register("phone", { required: "Telefone é obrigatório" })}
                className={errors.phone ? styles.inputError : ""}
              />
              {errors.phone && (
                <span className={styles.errorMessage}>
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email inválido",
                  },
                })}
                className={errors.email ? styles.inputError : ""}
              />
              {errors.email && (
                <span className={styles.errorMessage}>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Sua mensagem"
                {...register("message", { required: "Mensagem é obrigatória" })}
                className={errors.message ? styles.inputError : ""}
              ></textarea>
              {errors.message && (
                <span className={styles.errorMessage}>
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="agreeToPrivacyPolicy"
                name="agreeToPrivacyPolicy"
                {...register("agreeToPrivacyPolicy", {
                  required:
                    "Você deve concordar com a política de privacidade.",
                })}
                className={errors.agreeToPrivacyPolicy ? styles.inputError : ""}
              />
              <label
                htmlFor="agreeToPrivacyPolicy"
                className={styles.checkboxLabel}
              >
                De acordo com a LGPD, concordo em fornecer os dados acima para
                que a Touring Cars entre em contato comigo para apresentar
                serviços. Seu nome, e-mail e telefone serão usados de acordo com
                a nossa Política de Privacidade .
              </label>
              {errors.agreeToPrivacyPolicy && (
                <span className={styles.errorMessage}>
                  {errors.agreeToPrivacyPolicy.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default ContactForm;
