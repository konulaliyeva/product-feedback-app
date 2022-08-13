import React, { useEffect, useState } from 'react';
import styles from './RoadmapBody.module.css';
import SingleRoadmap from './SingleRoadmap';
import { useDispatch } from 'react-redux';
import { getFeedbacks } from '../../api/feedbacksAPI';
import { useSelector } from 'react-redux';

function RoadmapBody() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  const { feedbacks } = useSelector((state) => state.feedbacks);

  let filtredPlanned= feedbacks.filter(feedback=>feedback.state.progress==='Planned');
  let filtredInProgress= feedbacks.filter(feedback=>feedback.state.progress==='In-Progress');
  let filtredLive= feedbacks.filter(feedback=>feedback.state.progress==='Live');

     

  return (
    <div className={styles['roadmap-body-container']}>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className={styles['roadmap-section']}>
              <div className={styles['roadmap-section-content']}>
                <h4>Planned ({filtredPlanned.length})</h4>
                <p>Ideas prioritized for research</p>
                {feedbacks.map(
                  (feedback) =>
                    feedback.state.progress === 'Planned' && (
                      <SingleRoadmap key={feedback.id} feedback={feedback} />
                    )
                )}
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className={styles['roadmap-section']}>
              <div className={styles['roadmap-section-content']}>
                <h4>In-Progress ({filtredInProgress.length})</h4>
                <p>Currently being developed</p>
                {feedbacks.map(
                  (feedback) =>
                    feedback.state.progress === 'In-Progress' && (
                      <SingleRoadmap key={feedback.id} feedback={feedback} />
                    )
                )}
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className={styles['roadmap-section']}>
              <div className={styles['roadmap-section-content']}>
                <h4>Live ({filtredLive.length})</h4>
                <p>Released features</p>
                {feedbacks.map(
                  (feedback) =>
                    feedback.state.progress === 'Live' && (
                      <SingleRoadmap key={feedback.id} feedback={feedback} />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapBody;