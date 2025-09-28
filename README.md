#MY BU-COS 209 ASIGNMENT

## 1. Classes
- Introduced as syntactic sugar over JavaScript’s prototype-based inheritance.  
- Supports `constructor`, instance methods, static methods, and `extends` for inheritance.  
- Provides a cleaner, object-oriented way to define and manage objects.

## 2. Arrow Functions
- Shorter syntax for writing functions: `() => {}`.  
- Lexically bind `this` (inherit from surrounding scope).  
- Ideal for callbacks, array methods (`map`, `filter`, etc.), and concise logic.

---

## 3. Variables (`let` & `const`)
- `var`: function-scoped, hoisted (older keyword).  
- `let`: block-scoped, can be reassigned, not hoisted the same way.  
- `const`: block-scoped, cannot be reassigned (but objects/arrays can still be mutated).

---

## 4. Array Methods
- Built-in methods to work with collections of data:  
  - `.map()` → transform each element.  
  - `.filter()` → return elements matching a condition.  
  - `.reduce()` → accumulate values (e.g., sum).  
  - `.find()`, `.some()`, `.every()`, `.forEach()` → search, check, or loop.  

---

## 5. Destructuring
- Extract values from arrays or objects into variables.  
- Supports defaults and nested values.  
- Example:  
  ```js
  const { name, age } = person;  
  const [first, second] = numbers;
