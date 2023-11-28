import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid, TextField, ThemeProvider, createTheme } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import type { QuestType } from '../../types/questType/questType';
import { thunkNewProgress } from '../../redux/slices/questThunks/questAsyncThunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkNewUserAchiv } from '../../redux/slices/achievesAsyncThunk';
import LocationsCard from './LocationsCard';
import '../pages/css/Accordion.css';

type ControlledAccordionsProps = {
  quest: QuestType;
};

export default function ControlledAccordions({ quest }: ControlledAccordionsProps): JSX.Element {
  const prog = useAppSelector((store) => store.questsSlice.currentUserProgress);
  const navigate = useNavigate();

  let openAcc: [] | number[] = [];
  let openAcc2: [] | number[] = [];
  if (prog.length) openAcc = prog.map((el) => el.questionId);
  if (quest.Questions) openAcc2 = quest.Questions.map((el) => el.id);

  const countCommonElements = (arr1: number[], arr2: number[]): number => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const intersection = new Set([...set1].filter((element) => set2.has(element)));

    return intersection.size;
  };
  const count = countCommonElements(openAcc, openAcc2) + 1;
  console.log('туть', count);

  const authSlice = useAppSelector((store) => store.authSlice);
  const dispatch = useAppDispatch();

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

  const [isAccordionDisabled, setIsAccordionDisabled] = React.useState({
    acc2: true,
    acc3: true,
    acc4: true,
    acc5: true,
  });

  const [currentStep, setCurrentStep] = React.useState(1);
  React.useEffect(() => {
    const updatedDisabledState = {};
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        updatedDisabledState[`acc${i}`] = false;
      } else {
        updatedDisabledState[`acc${i}`] = true;
      }
    }

    setIsAccordionDisabled(updatedDisabledState);
    setCurrentStep(count);
  }, [count]);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const [userAnswer, setUserAnswer] = React.useState('');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleButtonClick = (step: number): void => {
    const currentQuestion = quest.Questions[step - 1]; // Используем номер шага для получения текущего вопроса
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      const nextAccordion = `acc${step + 1}`;
      setIsAccordionDisabled((prevState) => ({
        ...prevState,
        [nextAccordion]: false,
      }));
      setCurrentStep(step + 1);
      setExpanded(`panel${step + 1}`);
      void dispatch(
        thunkNewProgress({
          userId: authSlice.user.status === 'authenticated' ? authSlice.user.id : 555,
          questionId: currentQuestion.id,
          complete: true,
        }),
      );
      setUserAnswer(''); // Очищаем поле ответа после перехода к следующему вопросу
    } else {
      toast.error('Подумайте еще раз', {
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

  const finishButtonClick = (step: number): void => {
    const currentQuestion = quest.Questions[step - 1];
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      const nextAccordion = `acc${step + 1}`;
      setIsAccordionDisabled((prevState) => ({
        ...prevState,
        [nextAccordion]: false,
      }));
      setCurrentStep(step + 1);
      setExpanded(`panel${step + 1}`);
      setUserAnswer('');
      void dispatch(thunkNewUserAchiv({ achivId: quest.achivId }));
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
      }).then(() => {
        navigate('/account');
      });
    } else {
      toast.error('Подумайте еще раз', {
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

  function generateNumberArray(length) {
    const resultArray = [];
    let currentValue = 2;

    for (let i = 0; i < length; i++) {
      resultArray.push(currentValue);
      currentValue++;
    }

    return resultArray;
  }

  console.log(quest.Questions.length);

  return (
    <div className='accordionPage'>
      <ThemeProvider theme={theme}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Шаг 1</Typography>

            <Typography sx={{ color: 'text.secondary' }}>{quest.Questions[0].title}</Typography>
          </AccordionSummary>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <AccordionDetails>
                <Typography>{quest.Questions[0].question}</Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Ответ на вопрос:"
                  variant="outlined"
                  name="input1"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                <Button
                  sx={{ height: '40px' }}
                  onClick={() => handleButtonClick(1)} // Передача номера шага в функцию
                  variant="outlined"
                >
                  Next
                </Button>
              </AccordionDetails>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocationsCard location={quest.Questions[0].Location} />
            </Grid>
          </Grid>
        </Accordion>
        {generateNumberArray(quest.Questions.length - 1)?.map((step) => (
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
                {quest.Questions[step - 1].title}
              </Typography>
            </AccordionSummary>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <AccordionDetails>
                  <Typography>{quest.Questions[step - 1].question}</Typography>
                  <TextField
                    id={`outlined-basic-${step}`}
                    size="small"
                    label="Ответ на вопрос:"
                    name={`input${step}`}
                    variant="outlined"
                    value={userAnswer}
                    sx={{ height: '40px' }}
                    onChange={(e) => setUserAnswer(e.target.value)}
                  />
                  {step === quest.Questions.length ? (
                    <Button
                      sx={{ height: '40px' }}
                      onClick={() => finishButtonClick(quest.Questions.length)} // Передача номера последнего шага
                      variant="outlined"
                    >
                      Finish
                    </Button>
                  ) : (
                    <Button
                      sx={{ height: '40px' }}
                      onClick={() => handleButtonClick(step)} // Передача номера шага в функцию
                      variant="outlined"
                    >
                      Next
                    </Button>
                  )}
                </AccordionDetails>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocationsCard location={quest.Questions[step - 1].Location} />
              </Grid>
            </Grid>
          </Accordion>
        ))}
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}
