import React from "react";
import "./App.css";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import SimpleImage from "@editorjs/simple-image";

class ReactEditor extends React.PureComponent {
  divRef = React.createRef<HTMLDivElement>();
  editor: EditorJS | null = null;

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    if (!this.divRef.current) {
      return;
    }
    if (this.editor) {
      this.editor.destroy();
    }
    this.editor = new EditorJS({
      holder: this.divRef.current,
      tools: {
        header: {
          class: Header,
          inlineToolbar: false
        },
        list: {
          class: List,
          inlineToolbar: true
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true
        },
        simpleImage: {
          class: SimpleImage,
          inlineToolbar: false
        }
      },
      data: {
        time: 1574268130135,
        blocks: [
          {
            type: "simpleImage",
            data: {
              url: "cover.png",
              caption: "",
              withBorder: false,
              withBackground: false,
              stretched: true
            }
          },
          {
            type: "header",
            data: {
              text: "meet.js Gdańsk #26 – NOWE MIEJSCE",
              level: 1
            }
          },
          {
            type: "paragraph",
            data: {
              text: "Hej, hej! meet.js Gdańsk powraca w wielkim stylu!"
            }
          },
          {
            type: "paragraph",
            data: {
              text: "Tradycyjnie, zapraszamy na 3 prezentacje!"
            }
          },
          {
            type: "header",
            data: {
              text: "Sponsorzy",
              level: 2
            }
          },
          {
            type: "paragraph",
            data: {
              text: "Bardzo dziękujemy naszym sponsorom!"
            }
          },
          {
            type: "list",
            data: {
              style: "unordered",
              items: [
                '<a target="_blank" href="https://www.facebook.com/jit.team.poland/">Jit Team</a> i <a target="_blank" href="https://www.facebook.com/neoteric.eu/">Neoteric</a> za sponsorowanie napojów i przekąsek.',
                '<a target="_blank" href="https://www.facebook.com/Polufka/">Pub Polufka</a> za wspieranie nas :)',
                '<a target="_blank" href="https://www.facebook.com/C200OfficeGdansk/">C200 Office</a> za ugoszczenie w swojej świetnej sali!<br>'
              ]
            }
          },
          {
            type: "header",
            data: {
              text: "Agenda",
              level: 2
            }
          },
          {
            type: "list",
            data: {
              style: "ordered",
              items: [
                "18:00-18:20 <b>Łukasz Rybka</b> — Co nowego w npm?",
                "18:30-18:50 <b>Tomek Fiechowski</b> — React Context vs Redux<br>",
                "19:00-19:20 <b>Aleksander Wielgórski</b> — Napiszmy Blockchain w JS-ie<br>",
                "19:20-23:00 Networking<br>"
              ]
            }
          },
          {
            type: "header",
            data: {
              text: "Wystąp na meet.js!",
              level: 2
            }
          },
          {
            type: "paragraph",
            data: {
              text:
                "Jeśli chcesz wystąpić, albo Twoja firma chciałaby sponsorować meet.js — napisz do organizatorów!"
            }
          }
        ],
        version: "2.15.1"
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div ref={this.divRef} />
        <button
          onClick={() => {
            this.editor && this.editor.save().then(console.log);
          }}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ReactEditor />
    </div>
  );
}

export default App;
