import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

import { IconButton } from "@material-ui/core";

import FilterNoneIcon from "@material-ui/icons/FilterNone";
import { BsTrash } from "react-icons/bs";

import { FcRightUp } from "react-icons/fc";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";






import Accordion from "./Accordian";





const TestingQuestionForm = () => {

  

    const [questions, setQuestions] = useState([{
        questionText: "Which is the capital of rajasthan ?",
        questionType: "radio",
        options: [
            { optionText: "Jaipur" },
            { optionText: "Delhi" },
        ],
        open: true,
        answer: false,
        answerKey: "",
        points: 0,
        difficulty: "Difficulty",
        topic: "Topic",
    }
    ])
    const [documentIns, setDocumentIns] = useState("")

    const [showInstructionsInput, setShowInstructionsInput] = useState(true);


    const CustomAccordion = ({ title, content,i}) => {
 
        const [isOpen,setIsOpen] = useState(questions[i].open);
      
        // useEffect(() => {
        //   setIsOpen(expand);
        // }, [expand]);
       function handleChange(i){
        setIsOpen(!isOpen)
        let qs = [...questions]
        qs[i].open = !qs[i].open
        setQuestions(qs)

       }
        return (
          <div className="custom-accordion">
            {!isOpen && (
              <div className="custom-accordion-title" onClick={handleChange(i)}>
                {title}
              </div>
            )}
            {isOpen && <div className="custom-accordion-content">{content}</div>}
          </div>
        );
      };

    function questionChange(text, i) {
        let newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion)

    }
    const toggleInstructionsInput = () => {
        setShowInstructionsInput((prevValue) => !prevValue);
    };

   
    function changeOptionValue(text, i, j) {
        let questionOption = [...questions];


        questionOption[i].options[j].optionText = text;
        setQuestions(questionOption);
    }

    function removeOption(i, j) {
        let RemoveOptionQuestion = [...questions]
        if (RemoveOptionQuestion[i].options.length > 1) {
            RemoveOptionQuestion[i].options.splice(j, 1)
            setQuestions(RemoveOptionQuestion)
            console.log(i + "_" + j)
        }
    }
    function copyQuestion(i) {
        expandCloseAll();

        const qs = [...questions];
        const copiedQuestion = { ...qs[i] };
        const copiedOptions = copiedQuestion.options.map((option) => ({ ...option }));

        copiedQuestion.options = copiedOptions;
        qs.push(copiedQuestion);

        setQuestions(qs);


    }

    function deleteQuestion(i) {
        let qs = [...questions]
        if (questions.length > 1) {
            qs.splice(i, 1)
        }
        setQuestions(qs)
    }
    
    function addMoreQuestionFields() {
        expandCloseAll();
        setQuestions([...questions, { questionText: "", questionType: "radio", options: [{ optionText: "" }], open: true, answer: false, answerKey: "", points: 0, difficulty: "Difficulty", topic: "Topic", }])
    }

    function addOption(i) {
        let optionOfQuestion = [...questions];
        if (optionOfQuestion[i].options.length < 4) {
            optionOfQuestion[i].options.push({ optionText: "" })
        } else {
            console.log("max 4 option")
        }
        setQuestions(optionOfQuestion)
    }
    
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed)
        return result;
    }

    function expandCloseAll() {
        let qs = [...questions]
        for (let j = 0; j < qs.length; j++) {
            qs[j].open = false;
        }
        setQuestions(qs);
    }

    function handleExpand(i) {
        let qs = [...questions]
        for (let j = 0; j < qs.length; j++) {
            if (i === j) {
                qs[i].open = true
            } else {
                qs[j].open = false
            }
        }
        setQuestions(qs);
    }

    function setOptionAnswer(ans, qno) { // qno is question number
        let Questions = [...questions];
        Questions[qno].answerKey = ans;

        setQuestions(Questions);
        // console.log(qno+" "+ans);
    }

    function setOptionPoints(points, qno) {
        let Questions = [...questions]

        Questions[qno].points = points;
        setQuestions(Questions);
        console.log(qno + " " + points);
    }

    function doneAnswer(i) {
        let answerOfQuestion = [...questions]

        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        setQuestions(answerOfQuestion)
        expandCloseAll()
    }
    function addAnswer(i) {
        let answerOfQuestion = [...questions]

        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        setQuestions(answerOfQuestion)
    }

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        let itemgg = [...questions];
        const itemF = reorder(
            itemgg,
            result.source.index,
            result.destination.index
        );
        setQuestions(itemF)
    }

    function commitToDB() {
        expandCloseAll();
        // dispatch({
        //     type: actionTypes.SET_QUESTIONs,
        //     questions: questions
        // })     


        // axios.post(`http://localhost:9000/add_questions/${id}`, {
        //     "doc_name":documentName,
        //     "doc_desc":documentDesc,
        //     "questions":questions
        // })
    }
    function handleChangeDifficulty(value, i) {
        let qs = [...questions]
        qs[i].difficulty = value;
        setQuestions(qs);
    }
    function handleChangeTopic(value, i) {
        let qs = [...questions]
        qs[i].topic = value;
        setQuestions(qs);
    }
    // const handleToggleAccordion = (index) => {
    //     const updatedQuestions = [...questions];
    //     updatedQuestions[index].open = !updatedQuestions[index].open;
    //     setQuestions(updatedQuestions);
    //   };
        

    function questionUI() {
        return questions.map((ques, i) => (
             <CustomAccordion   title={((
                <div className="saved_questions">

                    <Typography className="text-[15px] font-normal leading-6 pb-[8px] tracking-tighter" >
                        {i + 1}.{questions[i].questionText}
                    </Typography>
                    {
                        ques.options.map((op, j) => (
                            <div key={j}>
                                <div className="flex" >
                                    <FormControlLabel 
                                    className="mb-[5px] ml-[5px]"
                                        
                                        disabled
                                        control=
                                        {<input type={ques.questionType} color="primary" 
                                        className="mr-[3px]"
                                             required={ques.type} />}
                                        label={
                                            <Typography 
                                            className="text-[13px] font-normal tracking-tighter leading-5 text-gray-700"
                                            >
                                                {ques.options[j].optionText}
                                            </Typography>

                                        } />


                                </div>

                            </div>
                        ))}
                    <div className="flex ml-[400px]" >
                        <Button variant="contained" className="text-[10px]" color="primary" s >{questions[i].difficulty}</Button>
                        <Button variant="contained" color="primary" className="text-[10px] ml-[20px]" >{questions[i].topic}</Button>
                    </div>
                </div>
            ))} content={(
                <div className=" flex justify-center">
                                            {!questions[i].answer ? (
                                                // add_question
                                                <div className="bg-white rounded-lg capitalize flex flex-col pt-0 w-11/12 px-[22px] py-[25px] ml-[10px]">
                                                    {/* add_question_top */}
                                                    <div className="flex items-center justify-between ">
                                                        {/*  question*/}
                                                        <input type="text" name="" id="" className="box-border mt-[10px] text-[15px] font-normal flex-1 w-2/5 border-none outline-none text-black h-[40px] p-[10px] mr-[10px] leading-[10px]" value={ques.questionText} placeholder="Question" onChange={(e) => { questionChange(e.target.value, i) }} />
                                                        <span>
                                                            <select id="difficulty" value={questions.difficulty} onChange={(e) => { handleChangeDifficulty(e.target.value, i) }} >
                                                                <option value="">Difficulty</option>
                                                                <option value="easy">Easy</option>
                                                                <option value="medium">Medium</option>
                                                                <option value="hard">Hard</option>
                                                            </select>

                                                        </span>
                                                        <span>
                                                            <select id="difficulty" className="ml-[20px]" value={questions.topic} onChange={(e) => { handleChangeTopic(e.target.value, i) }} >
                                                                <option value="">Topic</option>
                                                                <option value="Topic_1">Topic_1</option>
                                                                <option value="Topic_2">Topic_2</option>
                                                                <option value="Topic_3">Topic_3</option>
                                                            </select>

                                                        </span>




                                                    </div>
                                                    {
                                                        ques.options.map((op, j) => (
                                                            // add_question_body
                                                            <div className="flex items-center" key={j}>
                                                                {
                                                                    <input type={ques.questionType}
                                                                        className="mr-[10px]"
                                                                    />
                                                                }
                                                                <div>
                                                          {/* text_input */}
                                                                    <input type="text" className="outline-none border-none h-[40px] w-[300px] text-[13px] font-normal tracking-tighter text-gray-700 " placeholder="option" value={ques.options[j].optionText} name="" id="" onChange={(e) => { changeOptionValue(e.target.value, i, j) }} />
                                                                </div>

                                                                <IconButton aria-label="delete">
                                                                    <CloseIcon onClick={() => { removeOption(i, j) }} />
                                                                </IconButton>

                                                            </div>
                                                        ))}

                                                    {
                                                        ques.options.length < 4 ? (
                                                            <div className="flex items-center">
                                                                <FormControlLabel disabled control={
                                                                    <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                        className="ml-[10px] mr-[10px]"
                                                                        disabled />
                                                                } label={
                                                                    <div>
                                                                        <input type="text" className="outline-none border-none h-[40px] w-[60px] text-[13px] font-normal tracking-tighter text-gray-700" placeholder="Add Other" name="" id="" />
                                                                        <Button size="small"
                                                                            className="text-[13px] font-semibold text-blue-500 normal-case"
                                                                            onClick={() => { addOption(i) }}>
                                                                            Add Option
                                                                        </Button>
                                                                    </div>
                                                                } />
                                                            </div>
                                                        ) : ""}

                                                    {/*  add_footer*/}
                                                    <div className="flex justify-between">

                                                        <div className="add_question_bottom_left">
                                                            <Button size="small" className="text-[13px] font-semibold normal-case text-blue-500 " onClick={() => { addAnswer(i) }}>
                                                                <FcRightUp className="p-[2px] mr-[8px] border-2 border-blue-500" /> Answer Key
                                                            </Button>
                                                        </div>
                                                        {/* add_question_bottom */}
                                                        <div className="mt-[12px] flex justify-end items-center border-t-1 border-gray-300">
                                                            <IconButton aria-label="copy" onClick={() => { copyQuestion(i) }}>
                                                                <FilterNoneIcon />
                                                            </IconButton>
                                                            <IconButton aria-label="delete" onClick={() => { deleteQuestion(i) }}>
                                                                <BsTrash />
                                                            </IconButton>

                                                        </div>
                                                    </div>

                                                </div>
                                            ) : (
                                                // add_questions
                                                <div className="bg-white rounded-lg capitalize flex flex-col pt-0 w-11/12 px-[22px] py-[25px] ml-[10px]">
                                                    <div className="top_header">
                                                        Choose Correct Answer
                                                    </div>
                                                    <div>
                                                        {/* add_question_top */}
                                                        <div className="flex items-center justify-between">
                                                            {/* question */}
                                                            <input type="text" className="box-border mt-[10px] text-[15px] font-normal flex-1 w-2/5 border-none outline-none text-black h-[40px] p-[10px] mr-[10px] leading-[10px]" placeholder="Questions" value={ques.questionText} name="" id="" disabled />
                                                            {/* points */}
                                                            <input type="number" className="box-border text-[15px] font-normal w-1/12 outline-none text-black h-[40px] mr-[10px] p-[4px] leading-[10px] border-1 border-blue-500" min="1" step="1" placeholder="1" name="" id="" onChange={(e) => { setOptionPoints(e.target.value, i) }} />
                                                        </div>
                                                        {ques.options.map((op, j) => (
                                                            //  add_question_body

                                                            <div className="flex items-center mb-[10px] mt-[5px] ml-[8px]" key={j} >
                                                                <div key={j}>
                                                                    <div className="flex">
                                                                        <div className="form-check">
                                                                            <label className="text-[13px]" onClick={() => { setOptionAnswer(ques.options[j].optionText, i) }} htmlFor="">
                                                                                {

                                                                                    <input type={ques.questionType}
                                                                                        name={ques.questionText}
                                                                                        value="option3"
                                                                                        className="mr-[10px] mb-[10px] mt-[5px]"
                                                                                        required={ques.required}

                                                                                    />
                                                                                }

                                                                            </label>
                                                                            {ques.options[j].optionText}

                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        ))}

                                                        {/* add_question_bottom */}
                                                        <div className="mt-[12px] flex justify-end items-center border-t-1 border-gray-300 text-blue-500">
                                                            <Button variant="outlined" color="primary" className="text-[12px] mt-[12px] font-semibold normal-case" onClick={() => { doneAnswer(i) }} >Done</Button>
                                                        </div>
                                                    </div>


                                                </div>
                                            )}


                                        </div>
            )}  ></CustomAccordion>
        ))
                            }
         
        

    

     return (
        <div>
           {/* question_form */}
            <div className="bg-gray-100 h-full pb-[30px]">
                <br />
                
                {/* section */}
                <div className="w-1/2 m-auto">
                <button  className="m-[10px]" onClick={toggleInstructionsInput}>
                    {showInstructionsInput ? 'Save Instructions' : 'Edit Instructions' }
                </button>
                    <div className="question_title_section">
                         {/* question_form_top */}
                        <div className="bg-white capitalize py-[30px] px-[25px] border-t-8 border-purple-600 rounded-lg">
                            {showInstructionsInput ? (
                                // question_form_top_name
                                <input className="box-border text-[32px] font-normal w-full leading-[40px] outline-none border-none h-[35px] text-black border-b-1 border-gray-200" name="" id="" cols="30" rows="10" placeholder="Add Instruction for the assignment" value={documentIns} style={{ color: 'black' }} onChange={(e) => { setDocumentIns(e.target.value) }} />
                            ) : (
                                <div>{documentIns}</div>
                            )}


                        </div>
                    </div>

                        <div>
                        {questionUI()}
                        </div>
                    {/* saved_form */}
                    <div className="flex justify-between">
                        <Button variant="contained" color="primary" onClick={commitToDB} className="text-[14px]"  >save</Button>
                        <Button variant="contained" color="primary" onClick={addMoreQuestionFields} className="text-[14px]">Add question</Button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestingQuestionForm;