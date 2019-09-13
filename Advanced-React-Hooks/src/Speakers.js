import React, { useState, useEffect, useContext, useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";

// Importing the ConfigContext so we can make use of useContext
import { ConfigContext } from "./App";

// Importing reducer to manipulate the state of the speakersList separately
import speakersReducer from "./speakersReducer";

// Sorts and filters speakers ready to be rendered
const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  //const [speakerList, setSpeakerList] = useState([]);
  // useState uses useReducer under the hood:
  //
  // const [speakerList, setSpeakerList] = useReducer((state, action) => action, []);
  //
  // Why is the boiler plate for a general reducer is (state, action) => action (or
  // function(state, action) { return action; }) and not (state, action) => action(state)
  // The dispatcher behind the scenes (e.g. setSpeakerList(newState)) calls reducer with
  // speakerList, newState
  // Well, why is the basic reducer not (state, newState) => newState then?
  // Because there are other ways you could call the dispatcher depending on how you want
  // to set it up e.g.
  // (state, action) => { switch (action.type) ... return {count:1} or {count:2}} }
  // and call the dispatcher with setSpeakerList({type: "increment"}) - see:
  // https://reactjs.org/docs/hooks-reference.html#usereducer
  // i.e. the default reducer used by useState is (state, action) => action

  const [speakerList, dispatch] = useReducer(speakersReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);  // !!!!!!!!!!!! 

  useEffect(() => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });
      // setSpeakerList(speakerListServerFilter);
      dispatch({
        type: "setSpeakerList",
        data: speakerListServerFilter
      });
    });
    return () => {
      console.log("cleanup");
    };
  }, []);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const speakerListFiltered = isLoading
    ? []
    : speakerList
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort((a, b) => {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    // setSpeakerList(speakerList.map(item => {   handled in reducer instead
    //   if (item.id === sessionId) {
    //     item.favorite = favoriteValue;
    //     return item;
    //   }
    //   return item;
    // }));
    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === false ? null : (
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSaturday}
                  checked={speakingSaturday}
                />
                Saturday Speakers
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSunday}
                  checked={speakingSunday}
                />
                Sunday Speakers
              </label>
            </div>
          </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
