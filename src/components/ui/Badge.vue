<script>
export default {
  data() {
    return {
      addOnClass: "",
    };
  },
  props: {
    text: {
      type: String,
      default: "Default",
    },
  },
  computed: {
    badgeClass() {
      switch (this.text) {
        case "HTML":
          this.addOnClass =
            "text-html bg-html/15 dark:text-html-alt dark:bg-html-alt/15";
          break;
        case "CSS":
          this.addOnClass =
            "text-css bg-css/15 dark:text-css-alt dark:bg-css-alt/15";
          break;
        case "JavaScript":
          this.addOnClass =
            "text-javascript-alt bg-javascript-alt/15 dark:text-javascript dark:bg-javascript/15";
          break;
        case "PHP":
          this.addOnClass =
            "text-php bg-php/15 dark:text-php-alt dark:bg-php-alt/15";
          break;
        case "Python":
          this.addOnClass =
            "text-python-2 bg-python-2/15 dark:text-python-1 dark:bg-python-1/15";
          break;
        case "Bootstrap CSS":
          this.addOnClass =
            "text-bootstrap bg-bootstrap/15 dark:text-bootstrap-alt dark:bg-bootstrap-alt/15";
          break;
        case "Laravel":
          this.addOnClass =
            "text-laravel bg-laravel/15 dark:text-laravel-alt dark:bg-laravel-alt/15";
          break;
        case "Tailwind CSS":
          this.addOnClass = "text-tailwind bg-tailwind/15";
          break;
        case "User Interface":
          this.addOnClass = "text-ui bg-ui/15";
          break;
        case "User Experience":
          this.addOnClass =
            "text-ux bg-ux/15 dark:text-ux-alt dark:bg-ux-alt/15";
          break;
        case "Figma":
          this.addOnClass = "text-figma bg-figma/15";
          break;
        case "MySQL":
          this.addOnClass =
            "text-mysql bg-mysql/15 dark:text-mysql-alt dark:bg-mysql-alt/15";
          break;
        case "Vue.js":
          this.addOnClass = "text-vue bg-vue/15 dark:bg-vue/15";
          break;
        case "Keras":
          this.addOnClass =
            "text-keras bg-keras/15 dark:text-keras-alt dark:bg-keras-alt/15";
          break;
        case "TensorFlow":
          this.addOnClass =
            "text-tensorflow bg-tensorflow/15 dark:bg-tensorflow/15";
          break;
        case "SASS":
          this.addOnClass = "text-sass bg-sass/15 dark:bg-sass/15";
          break;
        case "Git":
          this.addOnClass = "text-git bg-git/15 dark:bg-git/15";
          break;
        case "jQuery":
          this.addOnClass =
            "text-jquery bg-jquery/15 dark:text-jquery-alt dark:bg-jquery-alt/15";
          break;
        case "SQLite":
          this.addOnClass =
            "text-sqlite bg-sqlite/15 dark:text-sqlite-alt dark:bg-sqlite-alt/15";
          break;
        case "PostgreSQL":
          this.addOnClass =
            "text-postgresql bg-postgresql/15 dark:text-postgresql-alt dark:bg-postgresql-alt/15";
          break;
        case "Vite":
          this.addOnClass =
            "text-vite bg-vite/15 dark:text-vite-alt dark:bg-vite-alt/15";
          break;
        case "Numpy":
          this.addOnClass =
            "text-numpy bg-numpy/15 dark:text-numpy-alt dark:bg-numpy-alt/15";
          break;
        case "Pandas":
          this.addOnClass =
            "text-pandas bg-pandas/15 dark:text-pandas-alt dark:bg-pandas-alt/15";
          break;
        case "Responsive Web":
          this.addOnClass = "text-responsive bg-responsive/15";
          break;
        case "Computer Vision":
          this.addOnClass =
            "text-cv bg-cv/15 dark:text-cv-alt dark:bg-cv-alt/15";
          break;
        case "AI":
          this.addOnClass = "text-ai bg-ai/15 dark:text-ai-alt bg-ai-alt/15";
          break;
        case "Deep Learning":
          this.addOnClass =
            "text-deep-learning bg-deep-learning/15 dark:text-deep-learning-alt dark:bg-deep-learning-alt/15";
          break;
        case "NLP":
          this.addOnClass =
            "text-nlp bg-nlp/15 dark:text-nlp-alt dark:bg-nlp-alt/15";
          break;
        case "Sentiment Analysis":
          this.addOnClass =
            "text-sentiment-analysis bg-sentiment-analysis/15 dark:text-sentiment-analysis-alt dark:bg-sentiment-analysis-alt/15";
          break;
        case "Image Classification":
          this.addOnClass =
            "text-image-classification bg-image-classification/15 dark:text-image-classification-alt dark:bg-image-classification-alt/15";
          break;
        case "Scikit-learn":
          this.addOnClass = "text-sklearn bg-sklearn/15";
          break;
        default:
          this.addOnClass =
            "text-light-100 bg-light-100/15 dark:text-dark-90 dark:bg-dark-90/15";
          break;
      }

      return this.addOnClass;
    },
  },
};
</script>

<template>
  <span
    class="font-bold text-xs px-2 py-1 rounded-full cursor-default"
    :class="[badgeClass]"
    >{{ text }}</span
  >
</template>
