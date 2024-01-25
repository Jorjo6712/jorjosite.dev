export default {
csharp: {
  modalHeader: "C#",
  textContent:
            `
namespace HelloWorld
{
    internal class Hello {		 
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World");
        }
    }
}            
    `,
},
python: {
    modalHeader: "Python",
    textContent: 
    `
print("I learned python blah blah")
    `
},

html: {
    modalHeader: "HTML",
    textContent: 
    `
<p> I learned html blah blah </p>
    `
},

css: {
    modalHeader: "CSS",
    textContent:
    `
p {
content: "I learned css blah blah"
}
    `
},

javascript: {
    modalHeader: "JavaScript",
    textContent:
    `
alert("I learned javascript blah blah");
    `
}




}