import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid, TextField, ThemeProvider, createTheme } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

export default function ControlledAccordions(): JSX.Element {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000', // черный цвет (hex)
      },
      text: {
        primary: '#000000', // черный цвет текста (hex)
      },
      // другие цвета, если нужно
    },
  });
  const quest = {
    title: 'title',
    questions: [
      {
        title: 'вопрос1',
        question: 'текст вопроса 1',
        answer: '1',
      },
      {
        title: 'вопрос2',
        question: 'текст вопроса 2',
        answer: '2',
      },
      {
        title: 'вопрос3',
        question: 'текст вопроса 3',
        answer: '3',
      },
      {
        title: 'вопрос4',
        question: 'текст вопроса 4',
        answer: '4',
      },
      {
        title: 'вопрос5',
        question: 'текст вопроса 5',
        answer: '5',
      },
    ],
  };

  const [isAccordionDisabled, setIsAccordionDisabled] = React.useState({
    acc2: true,
    acc3: true,
    acc4: true,
    acc5: true,
  });

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [userAnswer, setUserAnswer] = React.useState('');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleButtonClick = (): void => {
    const currentQuestion = quest.questions[currentStep - 1];
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      const nextAccordion = `acc${currentStep + 1}`;
      setIsAccordionDisabled((prevState) => ({
        ...prevState,
        [nextAccordion]: false,
      }));
      setCurrentStep((prevStep) => prevStep + 1);
      setExpanded(`panel${currentStep + 1}`);
      setUserAnswer(''); // Очищаем поле ответа после перехода к следующему вопросу
    } else {
      toast.error('Падумай, бро', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  const finishButtonClick = (): void => {
    const currentQuestion = quest.questions[currentStep - 1];
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      const nextAccordion = `acc${currentStep + 1}`;
      setIsAccordionDisabled((prevState) => ({
        ...prevState,
        [nextAccordion]: false,
      }));
      setCurrentStep((prevStep) => prevStep + 1);
      setExpanded(`panel${currentStep + 1}`);
      setUserAnswer('');

      void Swal.fire({
        title: 'Найс ворк, бро!',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      });
    } else {
      toast.error('Падумай, бро', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div>
         <ThemeProvider theme={theme}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Шаг 1</Typography>

          <Typography sx={{ color: 'text.secondary' }}>{quest.questions[0].title}</Typography>
        </AccordionSummary>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <AccordionDetails>
              <Typography>{quest.questions[0].question}</Typography>
           
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Ответ на вопрос:"
                  variant="outlined"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                  <Button sx={{ height: '40px' }} onClick={handleButtonClick} variant="outlined">
                Next
              </Button>
             
            
            </AccordionDetails>
          </Grid>
        </Grid>
      </Accordion>
      {[2, 3, 4, 5].map((step) => (
        <Accordion
          key={`panel${step}`}
          disabled={isAccordionDisabled[`acc${step}`]}
          expanded={expanded === `panel${step}`}
          onChange={handleChange(`panel${step}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${step}bh-content`}
            id={`panel${step}bh-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>{`Шаг ${step}`}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {quest.questions[step - 1].title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{quest.questions[step - 1].question}</Typography>
            <TextField
              id={`outlined-basic-${step}`}
              size="small"
              label="Ответ на вопрос:"
              variant="outlined"
              value={userAnswer}
              sx={{ height: '40px' }}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            {step === quest.questions.length ? (
              <Button sx={{ height: '40px' }} onClick={finishButtonClick} variant="outlined">
                Finish
              </Button>
            ) : (
              <Button sx={{ height: '40px' }} onClick={handleButtonClick} variant="outlined">
                Next
              </Button>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
      <ToastContainer />
       </ThemeProvider>
    </div>
  );
}