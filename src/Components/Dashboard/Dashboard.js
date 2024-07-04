import React, { useEffect, useState } from 'react'
import DashboardHeader from '../Includes/DashboardHeader'
import './Dashboard.css'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Includes/Footer';
import GeneralService from '../../services/general.service';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const texts = ['dashboard', 'Mr, Masood'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);

  const getResultData = async () => {
    try {
      setLoading(true);

      const response = await GeneralService.listUsers();

      let resultData;
      setLoading(false);
      resultData = response.data.response;
      setResultData(resultData);
    } catch (err) {
      setResultData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getResultData();
  }, []);

  const state = useSelector((state) => state.stateVals);
  const { id, accessToken, uType } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken || (accessToken && uType === 'user')) {
      navigate("/admin-login");
    }
  }, []);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, texts]);

  return (
    <>
      <DashboardHeader />
      <div className="page-heading dashboard normal-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h6>Mr FREELANCER</h6>
                <h2>
                  WELCOME TO <span className="typing dasboard">{texts[index].substring(0, subIndex)}</span>
                  <span className="cursor dasboard">|</span>
                </h2>
                <p>Track, manage, and optimize your workflow seamlessly with our intuitive dashboard.<br /> Gain insights, streamline tasks, and enhance productivity all in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="item-details-page">
        <div className="container">
          <div className="row">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h2>Register <em>Users</em> Details</h2>
              <div className="dashboard-bid">
                <div class="recent-records">
                  <h2>Recent Records <em>{resultData.length}</em></h2>
                  <div class="view-all-container">
                    <Link to="/register-user" className="view-all-btn">View All</Link>
                  </div>
                </div>
                <div class="table-container">
                  <table class="dark-table">
                    <thead>
                      <tr>
                        <th><i class="fas fa-user"></i> Name</th>
                        <th><i class="fas fa-envelope"></i> Email</th>
                        <th><i class="fas fa-calendar-alt"></i> Date Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultData.map((row, num) => {
                        return (
                          <tr key={num}>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.date}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
