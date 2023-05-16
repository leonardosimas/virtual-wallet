export const GeneratePassword = (passwordLength: number, includeNumbers: boolean, includeSymbols: boolean, includeLowercase: boolean, includeUppercase: boolean) => {
    try {
      const generator = require('generate-password');
  
      if (!includeNumbers && !includeSymbols && !includeLowercase && !includeUppercase) {
          throw new Error ("Você precisa selecionar pelo menos um tipo de restrição.");
      }
  
      const password = generator.generate({
          length: passwordLength,
          numbers: includeNumbers,
          symbols: includeSymbols,
          lowercase: includeLowercase,
          uppercase: includeUppercase,
          excludeSimilarCharacters: false,
          strict: false
      });
  
      return password;
    } catch (error) {
      // Trate o erro aqui de acordo com a necessidade da sua aplicação
      console.error('Erro ao gerar senha:', error);
      return null; // Ou retorne um valor padrão ou trate de outra forma a situação de erro
    }
  }
  