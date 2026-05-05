<template>
  <div class="converter-container">
    <h2>Conversor de Temperatura</h2>
    
    <div class="input-group">
      <label>Celsius (°C)</label>
      <input type="number" v-model="celsius" @input="convertFromCelsius" placeholder="Ej. 25" />
    </div>
    
    <div class="input-group">
      <label>Fahrenheit (°F)</label>
      <input type="number" v-model="fahrenheit" @input="convertFromFahrenheit" placeholder="Ej. 77" />
    </div>
    
    <div class="input-group">
      <label>Kelvin (K)</label>
      <input type="number" v-model="kelvin" @input="convertFromKelvin" placeholder="Ej. 298.15" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'convertidorTemp',
  data() {
    return {
      celsius: '',
      fahrenheit: '',
      kelvin: ''
    }
  },
  methods: {
    convertFromCelsius() {
      if (this.celsius === '') {
        this.clearAll();
        return;
      }
      const c = parseFloat(this.celsius);
      this.fahrenheit = ((c * 9/5) + 32).toFixed(2);
      this.kelvin = (c + 273.15).toFixed(2);
    },
    convertFromFahrenheit() {
      if (this.fahrenheit === '') {
        this.clearAll();
        return;
      }
      const f = parseFloat(this.fahrenheit);
      this.celsius = ((f - 32) * 5/9).toFixed(2);
      this.kelvin = (((f - 32) * 5/9) + 273.15).toFixed(2);
    },
    convertFromKelvin() {
      if (this.kelvin === '') {
        this.clearAll();
        return;
      }
      const k = parseFloat(this.kelvin);
      this.celsius = (k - 273.15).toFixed(2);
      this.fahrenheit = ((k - 273.15) * 9/5 + 32).toFixed(2);
    },
    clearAll() {
      this.celsius = '';
      this.fahrenheit = '';
      this.kelvin = '';
    }
  }
}
</script>

<style scoped>
.converter-container {
  max-width: 400px;
  width: 100%;
  margin: 2rem auto;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  font-family: 'Inter', system-ui, sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

h2 {
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.input-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-size: 0.9rem;
}

.input-group input {
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f9fafb;
}

.input-group input:hover {
  border-color: #d1d5db;
}

.input-group input:focus {
  border-color: #6f00ff;
  background-color: white;
  box-shadow: 0 0 0 4px rgba(111, 0, 255, 0.15);
  outline: none;
}
</style>
