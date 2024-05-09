import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import plus from "../../assets/plus.svg";
import right from "../../assets/right.svg";
import checkbox from "../../assets/united.svg";
import mainFooter from "../../assets/mainFooter.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "./index.css";

function Main() {
  const [project, setProject] = useState(null);
  const [time, setTime] = useState(null);
  const [link, setLink] = useState(null);
  const [desc, setDesc] = useState(null);
  const [tag, setAge] = React.useState("");

  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 10;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  const [value, setValue] = React.useState("1");

  const handleChang2 = (event, newValue) => {
    setValue(newValue);
  };
  const [shablon, setShablon] = React.useState("");

  const handle = (event) => {
    setShablon(event.target.value);
  };


  function Validate(project, time, link, desc) {
    if (!project) {
      alert("You did not enter Project!");
      return false;
    }
    if (!time) {
      alert("You did not enter Time!");
      return false;
    }

    if (!link) {
      alert("You did not enter Link!");
      return false;
    }

    if (!desc) {
      alert("You did not enter Desciription!");
      return false;
    }

    return true;
  }

  function handleContinue(e) {
    e.preventDefault();
    const isValid = Validate(project, time, link, desc);
    if (isValid) {
      const user = {
        project: project,
        tag: 'tag',
        time: time,
        immediately: 'immediately',
        timeSent: '17:30 21:30',
        link: link,
        desc: desc
      }
      console.log(user);
      setProject(""),
      setTime(""), 
      setLink(""), 
      setDesc("");
    }
  }

  function setProjectt(event) {
    setProject(event.target.value);
  }

  function handleTime(event) {
    setTime(event.target.value);
  }

  function handleLink(event) {
    setLink(event.target.value);
  }

  function handleContext(event) {
    setDesc(event.target.value);
  }

  return (
    <>
      <div className="main">
        <div className="main_container">
          <div className="main_header">
            <div className="main_header_first">
              <img src={plus} alt="" />
              <h2>Subloyiha ochish</h2>
            </div>
            <div className="main_header_last" onClick={handleContinue}>
              <p>Davom etish</p>
              <img src={right} alt="" />
            </div>
          </div>
          <div className="form">
            <TextField
              onChange={setProjectt}
              value={project}
              className="from_input"
              label="Loyiha nomi"
              type="text"
              variant="filled"
            />
            <FormControl
              className="from_input"
              variant="filled"
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-filled-label">Tag</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={tag}
              ></Select>
            </FormControl>
          </div>
          <div className="form">
            <div className="form_inputs">
              <div className="label">
                <img src={checkbox} alt="" />
                <p>Boshlanish vaqti</p>
              </div>
              <input
                className="time"
                type="time"
                id="time"
                onChange={handleTime}
                value={time}
              />
            </div>
            <div className="form_inputs">
              <div className="label">
                <img src={checkbox} alt="" />
                <p>Qancha vaqtda habar yuboriladi?</p>
              </div>
              <FormControl
                className="from_input"
                variant="filled"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  O’sha zahoti
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={tag}
                  onChange={handleChange}
                ></Select>
              </FormControl>
            </div>
          </div>
          <div className="box">
            <div className="box_title">
              <img src={checkbox} alt="" />
              <p>Habar yuborilmaydigan vaqt</p>
            </div>
            <Box sx={{ width: 300 }} />
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              getAriaValueText={valuetext}
              disableSwap
            />
          </div>
          <div className="timer">
            <p>13:00</p>
            <p>14:00</p>
            <p>15:00</p>
            <p>16:00</p>
            <p>17:00</p>
            <p>18:00</p>
            <p>19:00</p>
            <p>20:00</p>
            <p>21:00</p>
            <p>22:00</p>
            <p>23:00</p>
            <p>00:00</p>
            <p>01:00</p>
            <p>02:00</p>
            <p>03:00</p>
            <p>04:00</p>
            <p>05:00</p>
            <p>06:00</p>
            <p>07:00</p>
            <p>08:00</p>
            <p>09:00</p>
            <p>10:00</p>
            <p>11:00</p>
            <p>12:00</p>
          </div>

          <div className="main_footer">
            <div className="main_footer_right">
              <h2 className="main_footer_right_title">Habarning ko’rinishi</h2>
              <div className="main_footer_right_form">
                <div className="main_footer_right_form_first">
                  <p>Shablon</p>
                  <FormControl className="main_footer_right_form_input">
                    <InputLabel id="demo-simple-select-helper-label">
                      Shablon
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={shablon}
                      label="Age"
                      onChange={handle}
                    >
                      <MenuItem value="">
                        <em>shablon</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="main_footer_right_form_first">
                  <p>Link</p>
                  <input
                    className="main_footer_right_form_inputt"
                    type="text"
                    placeholder="Link"
                    onChange={handleLink}
                    value={link}
                  />
                </div>
              </div>
              <div className="tabs">
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChang2}
                        aria-label="lab API tabs example"
                      >
                        <Tab
                          sx={{ width: "251px" }}
                          label="O’zbekcha"
                          value="1"
                        />
                        <Tab
                          sx={{ width: "251px" }}
                          label="Русский"
                          value="2"
                        />
                        <Tab
                          sx={{ width: "251px" }}
                          label="English"
                          value="3"
                        />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <textarea
                        onChange={handleContext}
                        value={desc}
                        placeholder="Habar matni..."
                        className="textarea"
                      ></textarea>
                    </TabPanel>
                    <TabPanel value="2">
                      <textarea
                        onChange={handleContext}
                        value={desc}
                        placeholder="Текст сообщения..."
                        className="textarea"
                      ></textarea>
                    </TabPanel>
                    <TabPanel value="3">
                      <textarea
                        onChange={handleContext}
                        value={desc}
                        placeholder="Message text... "
                        className="textarea"
                      ></textarea>
                    </TabPanel>
                  </TabContext>
                </Box>
              </div>
            </div>
            <div className="mainfooter_left">
              <img src={mainFooter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
