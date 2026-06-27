from sqlalchemy import Column,Integer,String,Enum,relationship
from database import Base,engine,SessionLocal
class CompanyBase(Base):
    __table_name__="companies"
    id = Column(Integer,primary_keys = True,index=True)
    name = Column(String,nullable=False,index = True)
    email = Column(String,unique = True)
    phone = Column(String,unique = True)
    jobs = relationship("Job",back_populates = "company")