function Contact() {
  return (
    <div>
      <form>
        <input type='text' name='name' id='name' />
        <label for='name'>Nombre</label>
        <input type='email' name='email' id='email' />
        <label for='email'>Email</label>
        <input type='number' name='phone' id='phone' />
        <label for='phone'>Teléfono</label>
        <input type='textarea' name='contact-info' id='contact-info' />
      </form>
    </div>
  );
}

/* Esto debería ir directo en el form para poder
 * pasarle los datos dinámicos al
 * formulario de emailjs,
 * en todo caso cambiarle el nombre
 * al componente para que cuadre mejor el concepto.
 */

export default Contact;
